// Fetch and display users on page load
document.addEventListener("DOMContentLoaded", initializeUserPanel);

function initializeUserPanel() {
    fetchUsers().then(displayUsers);
}

// Fetch users from the backend
function fetchUsers() {
    return fetch("../backend/admin.php")
        .then(response => response.json())
        .catch(() => {
            alert("Unable to load users.");
            return [];
        });
}

function displayUsers(userList) {
    const userContainer = document.getElementById("user-list");
    userContainer.innerHTML = `
        <h3 style="text-align:center; font-family:sans-serif; color:#333;">User Directory</h3>
        <table style="width:100%; border-collapse:collapse; margin-top:20px; font-family:Arial, sans-serif;">
            <thead>
                <tr style="background-color:#f2f2f2;">
                    <th style="padding:12px; border:1px solid #ccc;">Username</th>
                    <th style="padding:12px; border:1px solid #ccc;">Email</th>
                    <th style="padding:12px; border:1px solid #ccc;">Role</th>
                </tr>
            </thead>
            <tbody>
                ${userList.map(({ id, username, email, role }) => `
                    <tr>
                        <td style="padding:10px; border:1px solid #ddd;">${username}</td>
                        <td style="padding:10px; border:1px solid #ddd;">${email}</td>
                        <td style="padding:10px; border:1px solid #ddd;">${role}</td>
                    </tr>
                `).join('')}
            </tbody>
        </table>
    `;
}
