export type Match = {
  Away_club_name: string;
  Away_club_id: number;
  Away_score: number;
  DateTime: string;
  Home_club_name: string;
  Home_club_id: string;
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
  Nationality: string,
  Date_of_birth: string,
  Position: string,
  Num_start: number,
  Num_sub: number,
  Status: "active" | "suspended"
  Type: "Player" | "Coach",
  contracts: [
      {
          Club: string,
          Club_id: number,
          Start_date: string,
          End_date: string | null,
          Transfer_fee: number
      }
  ]
}

export type CoachAward = {
  Award_id: number,
  Season_year: number,
  Partner_name: string;
  Is_season: number,
  Competitor_id: number,
  Month: number | null,
  Receiver_first_name: string,
  Receiver_last_name: string,
  Type: "Coach"
};

export type PlayerAward = {
  Award_id: number,
  Season_year: number,
  Partner_name: string;
  Is_season: number,
  Competitor_id: number,
  Month: number | null,
  Receiver_first_name: string,
  Receiver_last_name: string,
  Type: "Player"
};

export type GoalAward = {
  Award_id: number,
  Season_year: number,
  Partner_name: string,
  Is_season: number,
  Competitor_id: number,
  Month: number,
  Receiver_first_name: string,
  Receiver_last_name: string,
  Match_id: number,
  Activity_id: number,
  Type: "Goal"
};

export type Award = CoachAward | PlayerAward | GoalAward;

export type Club = {
  Club_id: number,
  Website_URL: string,
  Name: string,
  Season_year: number,
  Home_stadium: string,
  Point: number,
  Goal_for: number,
  Goal_against: number
}

export type Staff = {
  Staff_id: number,
  First_name: string,
  Last_name: string,
  Date_of_birth: string,
  Staff_type: string,
}

