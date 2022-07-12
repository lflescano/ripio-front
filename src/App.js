import React, {useState, useEffect} from 'react';
import { Switch, Route, Redirect, BrowserRouter } from 'react-router-dom';
import {useHistory} from 'react-router-dom';

import './App.css';

import {Context, ContextPersist} from "./store/context"
import ApiService from './services/ApiService';
import { AuthService } from './services/AuthService';
import SignInView from 'views/Auth/Login/SignInView';
import UserFormView from 'views/User/UserForm/UserFormView';
import WalletListView from 'views/Wallet/WalletList/WalletListView';
import TransactionListView from 'views/Transaction/TransactionList/TransactionListView';
import TransactionFormView from 'views/Transaction/TransactionForm/TransactionFormView';
import CurrencyListView from 'views/Currency/CurrencyList/CurrencyListView';
import CurrencyFormView from 'views/Currency/CurrencyForm/CurrencyFormView';
import { Navigate } from 'react-router';
import Modal from 'components/atoms/Modal';

const ProtectedRoute = ({
  user,
  redirectPath = '/landing',
  children,
}) => {
  if (!user) {
    return <Navigate to={redirectPath} replace />;
  }

  return children;
};

function App() {
    const history = useHistory();

    const [user, setUser] = useState(null);
    const [load, setLoad] = useState(false);
    const [showServerError, setShowServerError] = useState(false);

    useEffect(() => {
        AuthService.loadUser()
            .then(user => {
                setUser(user);
                setLoad(true);
            }).catch(error => {
                console.log('loadUser')
                console.log(error)
                setLoad(true);
            }
        );

        const currentUserObserver = AuthService.currentUser.subscribe(user_event => {
            if (user != null && user_event === null) {
                history.push('/login');
            }

            setUser(user_event);
        });

        const currentCode500Observer = ApiService.code500Subject.subscribe(response => {
            setShowServerError(true);
        });

        return function cleanup() {
            currentUserObserver.unsubscribe();
            currentCode500Observer.unsubscribe();
        }
    }, []); // eslint-disable-line react-hooks/exhaustive-deps

    const bodyServerError = <span className="show-server-error">
        <h3>Error en los servicios</h3>
    </span>;

    return (
        <ContextPersist>
            <Context>
                <main>
                    <BrowserRouter>
                        <Switch>
                            <React.Fragment>
                                    { (load && !user) &&
                                    <>
                                        <Route exact path='/login' component={SignInView} />
                                        <Redirect to="/login" />
                                    </>
                                    }
                                    { (load && user) &&
                                    <>
                                        <Route element={<ProtectedRoute user={user} />} >
                                            <Route exact path='/profile' component={UserFormView} />
                                            <Route exact path='/balances' component={WalletListView} />
                                            <Route exact path='/balances/:walletId/transacciones' component={TransactionListView} />
                                            <Route exact path='/transacciones/agregar' component={TransactionFormView} />
                                            <Route exact path='/monedas' component={CurrencyListView} />
                                            <Route exact path='/monedas/agregar' component={CurrencyFormView} />
                                            <Route exact path="/login">
                                                <Redirect to="/usuarios" />
                                            </Route>
                                            <Redirect to="/balances" />
                                        </Route>
                                    </>
                                    }
                            </React.Fragment>
                        </Switch>
                    </BrowserRouter>
                    <Modal
                        className="modal-server-error"
                        show={showServerError}
                        title={"Upps!"}
                        body={bodyServerError}
                        legend={"Recargar Sitio"}
                        action={() => {window.location.reload()}}
                        handleClose={() => {setShowServerError(false)}}
                    />
                </main>
            </Context>
        </ContextPersist>

    );
}

export default App;
