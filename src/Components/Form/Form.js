function Form() {
    return (
        <>
            <div class="container">
                <div class="login-box">
                    <h2>Login</h2>
                    <form>
                        <div class="textbox">
                            <input type="text" placeholder="Usuário" name="username" required/>
                        </div>
                        <div class="textbox">
                            <input type="password" placeholder="Senha" name="password" required/>
                        </div>
                        <input type="submit" class="btn" value="Entrar"/>
                    </form>
                </div>
            </div>
        </>
    )
}

export default Form