import React from "react";

function UserComponent({ user }) {
    if (!user || user.length === 0) {
        return <p>Nenhum usuário disponível.</p>;
    }

    return (
        <div>
            <h2>Detalhes do Usuário:</h2>
            {user.map((user) => (
                <div key={user.id}>
                    <p>Nome: {user.name}</p>
                    <p>Email: {user.email}</p>
                </div>
            ))}
        </div>
    );
}

export default UserComponent;
