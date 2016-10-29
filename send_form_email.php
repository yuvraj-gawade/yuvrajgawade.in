<?php
  // Get the form fields and remove whitespace.
  $name = strip_tags(trim($_POST["name"]));
	$name = str_replace(array("\r","\n"),array(" "," "),$name);
  $email = filter_var(trim($_POST["email"]), FILTER_SANITIZE_EMAIL);
  $message = trim($_POST["message"]);

  // Set the recipient email address.
  $recipient = "yuvipict@gmail.com";

  // Set the email subject.
  $subject = "New contact from $name";

  // Build the email content.
  $email_content = "Name: $name\n";
  $email_content .= "Email: $email\n\n";
  $email_content .= "Message:\n$message\n";

  mail($recipient, $subject, $email_content);
?>
