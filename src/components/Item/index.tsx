import './styles.css';

type Props = {
    text: string
}

export default function Item({ text }: Props) {
    return (
        <p>{text}</p>
    );
}