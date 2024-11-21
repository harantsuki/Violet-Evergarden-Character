const handleRegister = async (userData) => {
  try {
    const response = await fetch("http://localhost:3002/register", {
      method: "post",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(userData),
    });

    console.log(userData);

    if (response.ok) {
      const result = await response.json();
      window.location.href = "/login";
      return result;
    } else {
      const errorData = await response.json();
      console.log(errorData.message || "An error  occured");
      return {
        success: false,
        message: errorData.message || "An error occured",
      };
    }
  } catch (err) {
    console.log("Network error: " + err.message);
    return { success: false, message: "Network error: " + err.message };
  }
};

export default handleRegister;
