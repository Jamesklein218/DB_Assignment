export type Match = {
  Away_club_name: string;
  Away_score: number;
  DateTime: string;
  Home_club_name: string;
  Home_score: number;
  Match_id: number;
  Stadium: string
}

export type Goal = {
  Activity_id: number,
  Is_home: number,
  Is_first_half: number,
  Activity_time: number,
  Scorer_first_name: string,
  Scorer_last_name: string,
  Goal_type: "normal" | "own_goal"
}

export type Substitution = {
  Activity_id: number,
  Is_home: number,
  Is_first_half: number,
  Activity_time: number,
  In_first_name: string,
  In_last_name: string,
  Out_first_name: string,
  Out_last_name: string
}

export type Card = {
  Activity_id: number,
  Is_home: number,
  Is_first_half: number,
  Activity_time: number,
  Receiver_first_name: string,
  Receiver_Last_name: string,
  Card_type: "red" | "yellow"
}
export type Competitor = {
  Competitor_id: number,
  First_name: string,
  Last_name: string,
  Overall_rating: number
}
