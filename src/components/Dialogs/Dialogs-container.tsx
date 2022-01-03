import {sendMessageCreator, updateNewMessageBodyCreator} from "../../redux/dialogs-reducer";
import {Dialogs} from "./Dialogs";
import {connect} from "react-redux";

let mapStateToProps =
    (state: any) => {
        return {
            dialogsPage: state.dialogsPage
        }
    }

let mapDispatchToProps =
    (dispatch: any) => {
        return {
            updateNewMessageBody: (body: string) => {
                dispatch(updateNewMessageBodyCreator(body))
            },
            sendMessage: () => {
                dispatch(sendMessageCreator())
            }
        }
    }

export const DialogsContainer = connect(mapStateToProps, mapDispatchToProps)(Dialogs);