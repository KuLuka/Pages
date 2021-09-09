import React, { useState, useEffect } from 'react';
import { useHistory, Link } from 'react-router-dom'
import './style.scss';
import { useDispatch, useSelector } from 'react-redux';
import { signUpUserStart } from './../../redux/User/user.actions';


const mapState = ({ user }) => ({
    currentUser: user.currentUser,
    userErr: user.userErr
})


const Registration = () => {

    const history = useHistory();
    const { currentUser, userErr } = useSelector(mapState);
    const dispatch = useDispatch();
    const [displayName, setDisplayName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('')
    const [errors, setErrors] = useState([]);

    useEffect(() => {
        if (currentUser) {
            reset();
            history.push('/');

        }

    }, [currentUser]);

    useEffect(() => {
        if (Array.isArray(userErr) && userErr.length > 0) {
            setErrors(userErr);
        }
    }, [userErr]);


    const reset = () => {
        setDisplayName('');
        setEmail('');
        setPassword('');
        setConfirmPassword('');
        setErrors('')
    }


    const handleFormSubmit = e => {
        e.preventDefault();
        dispatch(signUpUserStart({
            displayName,
            email,
            password,
            confirmPassword
        }));

    }

    return (
        <div className='border-top'>
            <div className="form">
                <h3>Registracija</h3>
                <form onSubmit={handleFormSubmit}>

                    <h5>Ime i Prezime</h5>
                    <input
                        type="text"
                        name='displayName'
                        value={displayName}
                        placeholder="Ime"
                        onChange={e => setDisplayName(e.target.value)}
                    />

                    <h5>Email Adresa</h5>
                    <input
                        type="email"
                        name='email'
                        value={email}
                        placeholder="Email"
                        onChange={e => setEmail(e.target.value)}
                    />

                    <h5>Lozinka</h5>
                    <input
                        type="password"
                        name='password'
                        value={password}
                        placeholder="Lozinka"
                        onChange={e => setPassword(e.target.value)}
                    />

                    <h5>Potvrdite Lozinku</h5>
                    <input
                        type="password"
                        name='confirmPassword'
                        value={confirmPassword}
                        placeholder="Potvrdite Lozinku"
                        onChange={e => setConfirmPassword(e.target.value)}
                    />

                    {errors.length > 0 && (
                        <ul>
                            {errors.map((err, index) => {
                                return (
                                    <li style={{ padding: '1rem', fontSize: '0.8rem', transition: 'linear .2s' }} key={index}>
                                        {err}
                                    </li>
                                )
                            })}
                        </ul>
                    )}

                    <button style={{ marginTop: '3rem' }} class='primary'>Registrujte se</button>

                    <p>Imate nalog? <Link to='/login'><span>Ulogujte se ovde</span></Link></p>
                </form>
            </div>
        </div >
    )
}


export default Registration;
