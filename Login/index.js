import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux'
import './style.scss';
import { emailSignInStart, googleSignInStart } from './../../redux/User/user.actions';
import { Link, useHistory } from 'react-router-dom';


const mapState = ({ user }) => ({
    currentUser: user.currentUser
});

const Login = () => {

    const history = useHistory();
    const { currentUser } = useSelector(mapState);
    const dispatch = useDispatch();
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [errors, setErrors] = useState([]);

    useEffect(() => {
        if (currentUser) {
            setEmail('');
            setPassword('');
            history.push('/');

        }
    }, [currentUser])

    const handleSubmit = e => {
        e.preventDefault();
        dispatch(emailSignInStart({ email, password, setErrors }));
    }

    const handleGoogleSignIn = () => {
        dispatch(googleSignInStart());

    }

    return (
        <div className='border-top'>
            <div className="form">
                <h3>Prijavite se</h3>
                <form onSubmit={handleSubmit}>
                    <h5>Email Adresa</h5>
                    <input
                        type="email"
                        name="email"
                        value={email}
                        placeholder="Email"
                        onChange={e => setEmail(e.target.value)} />

                    {errors.length > 0 && (
                        <ul>
                            {errors.map((e, index) => {
                                return (
                                    <li
                                        style={{ padding: '1rem', fontSize: '0.8rem', transition: 'linear .2s' }}
                                        key={index}>
                                        {e}
                                    </li>
                                );
                            })}
                        </ul>
                    )}


                    <h5>Lozinka</h5>
                    <input
                        type="password"
                        placeholder='Password'
                        name="password"
                        value={password}
                        onChange={e => setPassword(e.target.value)} />

                    <Link to='/recovery'>
                        <p className='forgot'>Zaboravili ste lozinku?</p>
                    </Link>

                    <button className='primary'>Prijavite se</button>

                    <p>Ili se prijavite putem Google</p>
                    <button className="secondary"
                        onClick={handleGoogleSignIn}>Google</button>

                    <p>Novi kupac? <Link to='/registration'><span>Registrujte se ovde.</span></Link></p>
                </form>
            </div>
        </div>


    )
}

export default Login;