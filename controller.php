<?php
$servername = "localhost";
$username = "metelyov_vlad";
$password = "giAwHBPs}Nms";
$dbname = "metelyov_vlad";
$conn = new mysqli($servername, $username, $password, $dbname);
if ($conn->connect_error) {
    die("Connection failed: " . $conn->connect_error);
} 

if($_POST['action'] == 'login') {
    $sql = 'SELECT name FROM users WHERE email = "'.$_POST['email'].'" && password = "'.$_POST['password'].'"';
$result = $conn->query($sql);
if ($result->num_rows > 0) {
    while($row = $result->fetch_assoc()) {
        echo $row['name'].', successful login!';
    }
} else {
    echo 'User is not found';
}
}

if($_POST['action'] == 'signup') {
    $sql = 'INSERT INTO users (name, email, password)
VALUES ("'.$_POST['name'].'", "'.$_POST['email'].'", "'.$_POST['password'].'")';
if ($conn->query($sql) === TRUE) {
    echo "New user created successfully";
} else {
    echo "Error: " . $sql . "<br>" . $conn->error;
}
}

$conn->close();
?>