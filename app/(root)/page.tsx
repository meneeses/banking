import HeaderBox from '@/components/HeaderBox';
import RigthSideBar from '@/components/RigthSideBar';
import TotalBalanceBox from '@/components/TotalBalanceBox';
import React from 'react';

const Home = () => {

    const loggedIn = {firstName: 'João', lastName: 'Meneses', email: 'meneses-joao@hotmail.com '};

    return (
        <section className='home'>
            <div className='home-content'>
                <header className='home-header'>
                    <HeaderBox
                    type="greeting"
                    title="Welcome"
                    user={loggedIn?.firstName || 'Guest'}
                    subtext="Access and manage your account and transactions efficiently."
                    />

                    <TotalBalanceBox 
                        accounts={[]}
                        totalBanks={1}
                        totalCurrentBalance={1250.35}
                    /> 
                </header>

                RECENT TRANSACTIONS
            </div>

            <RigthSideBar 
            user={loggedIn}
            transactions={[]}
            banks={[{currentBalance:153.50}, {currentBalance: 1250.35}]}
            />
        </section>
    );
};

export default Home;