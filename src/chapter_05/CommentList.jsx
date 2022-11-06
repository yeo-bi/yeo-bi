import React from "react";
import Comment from "./Comment";

function CommentList(props) {
    return (
        <div>
            <Comment name={"일은엽"} comment={"안뇽 반가워!"} />
            <Comment name={"이은엽"} comment={"나 잘하지?"} />
            <Comment name={"삼은엽"} comment={"너무 재밌잖아ㅏㅏ"} />
        </div>
    );
}

export default CommentList;