import { IGlobalKeyEvent } from "./IGlobalKeyEvent";
import { IGlobalKeyResult } from "./IGlobalKeyResult";

/**
 * The signature of a global key listener
 */
 export type IGlobalKeyListener = (event:IGlobalKeyEvent) => IGlobalKeyResult