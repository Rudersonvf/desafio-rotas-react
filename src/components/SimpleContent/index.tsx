import './styles.css';

type Props = {
    text: string
}

export default function SimpleContent({ text }: Props) {
    return (
        <div className='content-container'>
            <h2>
                {text}
            </h2>
        </div>
    );
}