export interface NodeRowProps {
  address: `0x${string}`;
  index?: number;
  isStale?: boolean;
  // When provided, the row should render data for this bucket. If omitted, shows current/latest.
  bucketNumber?: bigint | null;
}

export interface WhitelistRowProps extends NodeRowProps {
  isActive: boolean;
}

export interface NodeInfo {
  stakedAmount: bigint | undefined;
  lastReportedPrice: bigint | undefined;
  oraBalance: bigint | undefined;
}

export interface HighlightState {
  staked: boolean;
  price: boolean;
  oraBalance: boolean;
}

export interface Assertion {
  asserter: `0x${string}`;
  proposer: `0x${string}`;
  disputer: `0x${string}`;
  proposedOutcome: boolean;
  resolvedOutcome: boolean;
  reward: bigint;
  bond: bigint;
  startTime: bigint;
  endTime: bigint;
  claimed: boolean;
  winner: `0x${string}`;
  description: string;
}

export interface AssertionWithId extends Assertion {
  assertionId: number;
}

export interface AssertionWithIdAndState extends Assertion {
  assertionId: number;
  state: number;
}

export interface AssertionModalProps {
  assertion: AssertionWithIdAndState;
  isOpen: boolean;
  onClose: () => void;
}

export interface OOTableProps {
  assertions: {
    assertionId: number;
    state: number;
  }[];
}

export interface OORowProps {
  assertionId: number;
  state: number;
}

export interface SettledRowProps {
  assertionId: number;
}
