import React from "react";

export default function Navigation({ isSignedIn, wallet }) {
  const signIn = () => {
    wallet.signIn();
  };
  const signOut = () => {
    wallet.signOut();
  };

  const displayWallet = () => {
    if (wallet.accountId.length > 13) {
      return `${wallet.accountId.substring(0, 13)}...`;
    } else {
      return `${wallet.accountId}`;
    }
  };

  return (
    <>
      <section className="login">
        {isSignedIn ? (
          <>
            Sign out: <button onClick={signOut}>{displayWallet()}</button>
          </>
        ) : (
          <>
            <button onClick={signIn}>Log In</button>
          </>
        )}
      </section>
    </>
  );
}
