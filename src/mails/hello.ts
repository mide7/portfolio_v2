import { SendMessageSchema } from "@/schemas";

export function sayHelloMail(input: SendMessageSchema) {
  return `

  
   <!DOCTYPE html>
<html>
<head>
    <style>
        /* Reset default styling */
        body, h1, p {
            margin: 0;
            padding: 0;
        }

        /* Main styles */
        body {
            font-family: Arial, sans-serif;
            background-color: #f4f4f4;
        }

        .container {
            max-width: 600px;
            margin: 0 auto;
            padding: 20px;
            background-color: #fff;
            border-radius: 10px;
            box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
        }

        h1 {
            color: #333;
            margin-bottom: 20px;
        }

        p {
            color: #666;
            margin-bottom: 30px;
        }

        img {
            max-width: 100%;
            height: auto;
        }
    </style>
</head>
<body>
    <div class="container">
        <h1>Contact Information</h1>
        <p><strong>Full Name:</strong> ${input.full_name}</p>
        <p><strong>Email:</strong>${input.email}</p>
        <p><strong>Message:</strong></p>
        <p>${input.message}</p>
    </div>
</body>
</html>

   
   `;
}
