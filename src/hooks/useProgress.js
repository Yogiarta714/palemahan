import { useContext } from "react";
import { ProgressContext } from "../context/progressContext.js";

export function useProgress() {
    const value = useContext(ProgressContext);
    if (!value) {
        throw new Error("useProgress harus dipakai di dalam <ProgressProvider>");
    }
    return value;
}
