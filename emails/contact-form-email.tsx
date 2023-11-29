interface ContactFormEmailProps {
  nickname: string
  name: string
  email: string
  message: string
}

const ContactFormEmail: React.FC<Readonly<ContactFormEmailProps>> = ({
  nickname,
  name,
  email,
  message
}) => (
  <div>
    <h1>Contact form submission</h1>
    <p>
      From <span>{nickname}</span> <strong>{name}</strong> at {email}
    </p>
    <h2>Message:</h2>
    <p>{message}</p>
  </div>
)

export default ContactFormEmail
