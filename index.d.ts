/// <reference types="node" />
import ErrnoException = NodeJS.ErrnoException;
export declare const bumpSync: () => void;
export declare const bumpp: () => Promise<{}>;
export declare const bump: (cb: ErrnoException) => void;
