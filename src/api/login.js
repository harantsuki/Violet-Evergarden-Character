const handleLogin = async (email, password) => {
  try {
    const response = await fetch("http://localhost:3002/login", {
      method: "post",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(email, password),
    });

    if (response.ok) {
      const result = await response.json();
      const token = result.token;
      localStorage.setItem("authToken", token);
      console.log(token + "Telah di simpan di local storage");
      window.location.href = "/violet";
      console.log("Login success");
      return {
        success: true,
        data: result,
      };
    } else {
      const errorData = await response.json();
      console.log(errorData.message || "An error occured");
      return {
        success: false,
        message: errorData.message || "An error occured",
      };
    }
  } catch (err) {
    console.log("Network error: " + err.message);
    return {
      success: false,
      message: "Network error: " + err.message,
    };
  }
};

export default handleLogin;
