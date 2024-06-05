import React, { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';
import paymentApi from '../../../api/paymentApi';

const PaymentResult = () => {
    const [paymentResult, setPaymentResult] = useState(null);
    const location = useLocation();

    useEffect(() => {
        const fetchPaymentResult = async () => {
            const params = new URLSearchParams(location.search);
            console.log('pram: ',params.toString());
            const response = await paymentApi.paymentResult(params.toString());
            console.log('response: ',response);
            setPaymentResult(response);
        };

        fetchPaymentResult();
    }, [location]);

    return (
        <div>
            {paymentResult ? (
                paymentResult.paymentStatus === "success" ? (
                    <div>
                        <h1>Payment Successful</h1>
                        <p>Order ID: {paymentResult.orderId}</p>
                        <p>Amount: {paymentResult.totalPrice}</p>
                        <p>Payment Time: {paymentResult.paymentTime}</p>
                        <p>Transaction ID: {paymentResult.transactionId}</p>
                    </div>
                ) : (
                    <h1>Payment: {paymentResult.paymentStatus}</h1>
                )
            ) : (
                <p>Processing payment...</p>
            )}
        </div>
    );
};

export default PaymentResult;
