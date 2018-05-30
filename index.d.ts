/// <reference types="node" />
import ErrnoException = NodeJS.ErrnoException;
export declare type ErrnoExceptionFn = (e: ErrnoException) => void;
export declare const bumpSync: () => void;
export declare const bumpp: () => Promise<void | Error>;
export declare const bump: (cb: ErrnoExceptionFn) => void;
