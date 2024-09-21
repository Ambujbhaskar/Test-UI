import "./status-bar.css";

const StatusBar = ({ selectedChars }: { selectedChars: number }) => (
    <section className='status-bar'>
        <p>status bar</p>
        <p>selected: <b>{selectedChars}</b></p>
    </section>
);

export default StatusBar;