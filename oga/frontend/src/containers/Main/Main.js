import React, { Component } from "react";

import Question from "../../components/Question/Question";

import { connect } from "react-redux";
import { withRouter } from "react-router";

import * as actionCreators from "../../store/actions/index";

class QuestionList extends Component {
    componentDidMount() {
        this.props.onGetAll();
        // if (!this.props.log_status) {
        //   this.props.history.push('/login');
        // }
    }

    clickAnswerHandler = qst => {
        // this.props.history.push("/question/" + qst.id + "/answer/");
    };

    clickNewQuestionHandler = () => {
        this.props.history.push("/questions/create");
    };

    click;
    render() {
        const Questions = this.props.storedQuestions.map(qs => {
            return (
                <Question
                    key={qs.id}
                    id={qs.id}
                    author={qs.author}
                    publish_date_time={qs.publish_date_time}
                    content={qs.content}
                    is_answered={qs.is_answered}
                    clickAnswer={() => this.clickAnswerHandler()}
                    // clickDetail={() => this.clickDetailHandler()}
                />
            );
        });

        return (
            <div className="QuestionList">
                <h1>Question Feed</h1>
                {Questions}
                <div>
                    <button
                        id="question-create-button"
                        onClick={() => this.clickNewQuestionHandler()}
                    >
                        +
                    </button>
                </div>
                <div>
                    <button
                        id="back-button"
                        onClick={() => this.props.history.goBack()}
                    >
                        Back
                    </button>
                </div>
                {/* <button
                        id="logout-button"
                        onClick={() => this.props.setLogout()}
                    >
                        Log-out
                    </button> */}
            </div>
        );
    }
}

const mapStateToProps = state => {
    return {
        storedQuestions: state.question.questions
        //log_status: state.rd.log_status,
    };
};

const mapDispatchToProps = dispatch => {
    return {
        onGetAll: () => dispatch(actionCreators.getQuestions())
        //setLogout: () =>
        //dispatch(actionCreators.settingLogout())
    };
};

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(withRouter(QuestionList));