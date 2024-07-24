import { useCallback, useEffect, useState } from 'react';

import { Label } from './ui/label';
import { Switch } from './ui/switch';

interface Props extends React.PropsWithChildren {
  onToggle: (checked: boolean) => void;
}

export default function Toggle({ onToggle, children }: Props) {
  const [isToggle, setIsToggle] = useState<boolean>(false);

  const toggle = useCallback(() => {
    setIsToggle((prev) => !prev);
  }, []);

  useEffect(() => {
    onToggle(isToggle);
  }, [isToggle]);

  return (
    <div className="flex items-center space-x-2">
      <Switch id="toggle" onClick={toggle} />
      <Label htmlFor="toggle">{children}</Label>
    </div>
  );
}
