import {useCallback, useState} from "react";

export default function useShow(): [boolean, () => void] {
    const [show, setShow] = useState(true);

    const toggle = useCallback(() => setShow(show => !show), []);
    return [show, toggle];
}
