import React, { useState } from 'react';
import {
    Panel,
    Heading,
    Text,
    Slider,
    Toggle,
    Select,
    Button,
    Knob,
    XYPad
} from '../../lib';
import styles from './StudioLayout.module.scss';

interface StudioLayoutProps {
    layoutMode?: 'stacked' | 'distributed' | 'centered';
}

export const StudioLayout: React.FC<StudioLayoutProps> = ({ layoutMode = 'stacked' }) => {
    // State for interactivity
    const [waveform, setWaveform] = useState('saw');
    const [detune, setDetune] = useState(25);
    const [pw, setPw] = useState(50);
    const [cutoff, setCutoff] = useState(1200);
    const [res, setRes] = useState(4.5);
    const [drive, setDrive] = useState(true);
    const [attack, setAttack] = useState(10);
    const [decay, setDecay] = useState(200);
    const [sustain, setSustain] = useState(70);
    const [release, setRelease] = useState(500);
    const [reverbSend, setReverbSend] = useState(-12);
    const [delaySend, setDelaySend] = useState(-24);
    const [drums, setDrums] = useState(true);
    const [vocals, setVocals] = useState(true);
    const [input, setInput] = useState('in1');
    const [gain, setGain] = useState(0);
    const [phase, setPhase] = useState(false);
    const [eqHigh, setEqHigh] = useState(0);
    const [eqMid, setEqMid] = useState(2);
    const [eqLow, setEqLow] = useState(-3);
    const [bypass, setBypass] = useState(false);
    const [thresh, setThresh] = useState(-20);
    const [ratio, setRatio] = useState(4);
    const [makeup, setMakeup] = useState(3);
    const [vectorX, setVectorX] = useState(0.5);
    const [vectorY, setVectorY] = useState(0.5);

    const columnClass = `${styles.column} ${layoutMode === 'distributed' ? styles.distributed : layoutMode === 'centered' ? styles.centered : ''}`;

    return (
        <div className={styles.container}>
            <div className={styles.header}>
                <Heading as="h1" size="lg">STUDIO CONSOLE</Heading>
                <div className={styles.headerActions}>
                    <Button>LOAD PROJECT</Button>
                    <Button variant="primary">SAVE</Button>
                </div>
            </div>

            <div className={styles.mainGrid}>
                {/* Column 1 */}
                <div className={columnClass}>
                    <Panel header="CHANNEL STRIP">
                        <div className={styles.stack}>
                            <Select
                                label="INPUT"
                                value={input}
                                options={[
                                    { value: 'in1', label: 'INPUT 1' },
                                    { value: 'in2', label: 'INPUT 2' },
                                    { value: 'bus1', label: 'BUS A' },
                                ]}
                                onChange={setInput}
                            />
                            <Slider label="GAIN" value={gain} min={-60} max={12} onChange={setGain} unit="dB" />
                            <Toggle label="PHASE INVERT" checked={phase} onChange={setPhase} />
                        </div>
                    </Panel>

                    <Panel header="OSCILLATOR">
                        <div className={styles.stack}>
                            <Select
                                label="WAVEFORM"
                                value={waveform}
                                options={[
                                    { value: 'saw', label: 'SAWTOOTH' },
                                    { value: 'sqr', label: 'SQUARE' },
                                    { value: 'sin', label: 'SINE' },
                                ]}
                                onChange={setWaveform}
                            />
                            <div className={styles.row}>
                                <Knob label="DETUNE" value={detune} onChange={setDetune} size="sm" />
                                <Knob label="PW" value={pw} onChange={setPw} size="sm" />
                            </div>
                            <XYPad
                                label="VECTOR"
                                x={vectorX}
                                y={vectorY}
                                onChange={(x, y) => { setVectorX(x); setVectorY(y); }}
                            />
                        </div>
                    </Panel>

                    <Panel header="FILTER">
                        <div className={styles.stack}>
                            <div className={styles.rowSpaced}>
                                <Knob label="CUTOFF" value={cutoff} max={20000} onChange={setCutoff} />
                                <Knob label="RES" value={res} max={10} onChange={setRes} />
                            </div>
                            <Toggle label="DRIVE" checked={drive} onChange={setDrive} />
                        </div>
                    </Panel>
                </div>

                {/* Column 2 */}
                <div className={columnClass}>
                    <Panel header="ENVELOPE">
                        <div className={styles.stack}>
                            <Slider label="ATTACK" value={attack} onChange={setAttack} unit="ms" />
                            <Slider label="DECAY" value={decay} onChange={setDecay} unit="ms" />
                            <Slider label="SUSTAIN" value={sustain} onChange={setSustain} unit="%" />
                            <Slider label="RELEASE" value={release} onChange={setRelease} unit="ms" />
                        </div>
                    </Panel>

                    <Panel header="EQ SECTION">
                        <div className={styles.stack}>
                            <div className={styles.rowSpaced}>
                                <Knob label="HIGH" value={eqHigh} min={-12} max={12} onChange={setEqHigh} size="sm" />
                                <Knob label="MID" value={eqMid} min={-12} max={12} onChange={setEqMid} size="sm" />
                                <Knob label="LOW" value={eqLow} min={-12} max={12} onChange={setEqLow} size="sm" />
                            </div>
                            <Toggle label="BYPASS" checked={bypass} onChange={setBypass} />
                        </div>
                    </Panel>

                    <Panel header="DYNAMICS">
                        <div className={styles.stack}>
                            <Slider label="THRESH" value={thresh} onChange={setThresh} unit="dB" />
                            <Slider label="RATIO" value={ratio} max={20} onChange={setRatio} unit=":1" />
                            <Slider label="MAKEUP" value={makeup} onChange={setMakeup} unit="dB" />
                        </div>
                    </Panel>
                </div>

                {/* Column 3 */}
                <div className={columnClass}>
                    <Panel header="MAIN MIX">
                        <div className={styles.waveformDisplay}>
                            <div className={styles.waveformContent}>
                                <Text variant="muted">WAVEFORM DISPLAY</Text>
                            </div>
                        </div>
                    </Panel>

                    <Panel header="SENDS">
                        <div className={styles.stackSm}>
                            <Slider label="REVERB" value={reverbSend} onChange={setReverbSend} unit="dB" />
                            <Slider label="DELAY" value={delaySend} onChange={setDelaySend} unit="dB" />
                        </div>
                    </Panel>
                    <Panel header="GROUPS">
                        <div className={styles.stackSm}>
                            <Toggle label="DRUMS" checked={drums} onChange={setDrums} />
                            <Toggle label="VOCALS" checked={vocals} onChange={setVocals} />
                        </div>
                    </Panel>
                </div>
            </div>
        </div>
    );
};
