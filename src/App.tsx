import "./App.css";

function App() {
  return (
    <>
      <div className="flex flex-col min-h-screen">
        <div className="h-[278px] colored-box">&nbsp;</div>
        <div className="flex justify-between flex-row space-10 min-w-full shadow-lg rounded-3xl p-20">
          <div>
            <p className=" text-primary font-bold text-4xl basis-1/4">
              Sign in with your account
            </p>
            <form className="flex flex-col space-y-10 justify-between pt-5">
              <div className="flex flex-col items-start space-y-2">
                <label className="text-grey" htmlFor="email">
                  Email
                </label>
                <input
                  className="border-2 border-[#3836003D] rounded-md px-4 py-2 w-full focus:border-gray-500 focus:text-md"
                  placeholder="someone@somewhere.com"
                  type="email"
                  name="email"
                  id="email"
                />
              </div>
              <div className="flex flex-col items-start space-y-2">
                <label className="text-grey" htmlFor="password">
                  Password
                </label>
                <input
                  className="border-2 border-[#3836003D] rounded-md px-4 py-2 w-full focus:border-gray-500 focus:text-md"
                  placeholder="*********"
                  type="password"
                  name="password"
                  id="password"
                />
              </div>
              <div className="flex justify-between">
                <div className="flex space-x-2">
                  <input type="checkbox" name="remember" id="remember" />
                  <label className="text-black" htmlFor="remember">
                    Remember me
                  </label>
                </div>
                <div>
                  <a href="#" className="text-primary">
                    Forgot password?
                  </a>
                </div>
              </div>
              <div className="w-full">
                <button
                  className="bg-primary w-full px-8 py-4 rounded-lg text-white font-bold text-xl"
                  type="submit"
                >
                  Login
                </button>
              </div>
            </form>
            <div className="my-5">
              <span className="line-through-content">Sign in with social</span>
            </div>
            <div>
              <button className=" w-full flex justify-center space-x-2 border-2 border-[#E8E8E8] px-8 py-4 rounded-lg text-black font-semibold text-md">
                <img src="assets/img/google-logo.svg" alt="Google Logo" />
                <span>Continue with Google</span>
              </button>
            </div>
            <div className="my-5 flex space-x-1 justify-center">
              <p className="text-grey">Not Registered Yet?</p>
              <p className="text-primary font-semibold">Create an account</p>
            </div>
          </div>
          <div className="flex flex-col items-center justify-center basis-1/2">
            <img src="assets/img/ballerina.svg" alt="ballerina pose" />
            <p className="text-black text-3xl font-semibold pt-10">
              Magic of Our Event Organization
              <span className="block text-center">Company</span>
            </p>
          </div>
        </div>
      </div>
      <div className="flex flex-col mt-5 sticky bottom-0">
        <img src="assets/img/footer.svg" alt="ballerina dance " />
      </div>
      <p className="text-center text-grey text-sm p-5">
        &copy; 2024 All rights reserved
      </p>
    </>
  );
}

export default App;
