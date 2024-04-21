import Link from 'next/link';
import { useRouter } from 'next/router';
import styles from './Login.module.css';

const LoginViews = () => {
    const { push } = useRouter();

    const handlelogin = () => {
        push("/product");
    }
    
    return(
        <div className={styles.login}>
            <h1 className='text-3xl font-bold'>Login Page</h1>
            <button onClick={() => handlelogin}>Login</button>
            <p style={{ color: 'red', border: '1px solid red', borderRadius: '10px' }}>
                Belum Punya Akun? Daftar <Link href={"/auth/register"}>disini</Link>
            </p>
        </div>
    )
}

export default LoginViews;