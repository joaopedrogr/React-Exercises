import { useState, useEffect } from 'react';

    function Message2() {
        const [message2, setMessage] = useState('Boa Tarde!');
        useEffect(() => {
            const timer = setTimeout(() => {
            setMessage('Boa Noite!');
        }, 10000);

    return () => clearTimeout(timer);
    }, []);

    return (
        <div>
            <h3>{message2}</h3>
        </div>
    );
}

export default Message2;