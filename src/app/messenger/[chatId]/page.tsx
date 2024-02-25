type Props = {
  params: { chatId: string };
};

export default function ChatHistory({ params }: Props) {
  return <div>Hello! {params.chatId}</div>;
}
