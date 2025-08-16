const API_BASE = "http://localhost:3000"; // Change if different

async function fetchProfile() {
  const id = document.getElementById("userId").value.trim();
  if (!id) return alert("Please enter a User ID");

  try {
    const res = await fetch(`${API_BASE}/profile/${id}`);
    const data = await res.json();

    if (!data) {
      alert("User not found!");
      return;
    }

    document.getElementById("name").value = data.name || "";
    document.getElementById("email").value = data.email || "";
    document.getElementById("phone").value = data.phone || "";

    alert("Profile loaded successfully!");
  } catch (err) {
    console.error("Error fetching profile:", err);
    alert("Failed to load profile");
  }
}

async function updateProfile(event) {
  event.preventDefault();
  const id = document.getElementById("userId").value.trim();
  if (!id) return alert("Please enter a User ID");

  const userObj = {
    name: document.getElementById("name").value.trim(),
    email: document.getElementById("email").value.trim(),
    phone: document.getElementById("phone").value.trim(),
  };

  try {
    const res = await fetch(`${API_BASE}/profile/${id}`, {
      method: "PUT", // or "POST" based on backend
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(userObj),
    });

    const data = await res.json();
    alert(data.message || "Profile updated successfully!");
  } catch (err) {
    console.error("Error updating profile:", err);
    alert("Failed to update profile");
  }
}
