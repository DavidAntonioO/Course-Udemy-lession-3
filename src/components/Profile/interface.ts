import { wrapperComponentProps } from "../../hoc/withTrackClick/interface";

export interface ProfileOwnProps{
    ownerName: string;
}

export type ProfileProps = ProfileOwnProps & wrapperComponentProps;