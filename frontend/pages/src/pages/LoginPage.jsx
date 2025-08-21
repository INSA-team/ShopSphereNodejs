import axios from "axios";

function LoginPage(){
  function handleLogin(event){
    event.preventDefault();
    const username = event.target[0].value;
    const password = event.target[1].value;
    axios.post('http://127.0.0.1:8000/api/login/', { username, password } )
      .then((response) => {
        console.log(response.data);
      })
      .catch((error) => {
        console.error(error.response ? error.response.data : "An error occurred");
      });
  }

  return(
    <>
      <h1>Login</h1>
      <form onSubmit={handleLogin}>
        <input type="text" placeholder="Username" />
        <input type="password" placeholder="Password" />
        <button type="submit">Login</button>
      </form>
    </>
  )
}
export default LoginPage;