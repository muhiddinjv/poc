import React from 'react';
import { fsrs } from 'ts-fsrs';
import { ExampleCard, ExampleGenerator } from './SRCard';

const SRApp = ({ cardRecord, logRecord }) => {
    const [cards, setCards] = React.useState(cardRecord || [])
    const [logs, setLogs] = React.useState(logRecord || [])
    const [f, setF] = React.useState(fsrs())

    return <div className="w-full">
        <div className="text-xl text-center">Current TS-FSRS Version:{fsrs.FSRSVersion}</div>
        <ExampleCard cardRecord={cards} f={f} className="w-full p-22"/>
        <div className="flex justify-center mt-8"><ExampleGenerator cards={cards} setCards={setCards} setLogs={setLogs} f={f} /></div>
    </div>;
};

export default SRApp