interface IMessageProps {
  message: string;
}

const Message = ({ message }: IMessageProps): JSX.Element => (
  <div className="message">
    <span>{message}</span>
  </div>
);

export default Message;
