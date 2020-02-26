export enum ERROR_CODES {
    DATABASE_ERROR = 402,
    DATABASE_DUPLICATE_ERROR_CODE = 1062,
    SESSION_ERRORR = 406,
    ERROR_UNKNOWN_HIDDEN_FROM_USER = 101,
    ERROR_UNKNOWN_SHOW_TO_USER = 102,
    INVALID_REQUEST = 103,
    JWT_ERROR = 104
}

let CONSTANTS = Object.freeze({

    JWT_VERIFICATION_EXPIRY_SEC: 3600,
    BASE_URL_VERIFICATION_PK: 9876540,
    JWT_ACCESS_TOKEN_EXPIRY_SEC: 2 * 3600,
    JWT_REFRESH_TOKEN_EXPIRY_SEC: 3 * 30 * 24 * 3600,
    FETCH_QUESTION_MIN_LENGTH: 3,
    FETCH_QUESTION_MAX_LENGTH: 500,
    AUTO_QUESTION_SUGGESTION_MAX_LENGTH: 20,
    MOST_POPULAR_COUNT: 3,
    HIDDEN_TEXT: "*************",
    HIDDEN_TEXT_MINI: "***",

    ERROR_DATABASE_ERROR: 101,
    ERROR_UNKNOWN: 102,
    ERROR_NO_ERROR: 103,
    ERROR_LIMIT_REACHED: 109,
    ERROR_SESSION_ERROR: 111,
    ERROR_UNKNOWN_SHOW_TO_USER: 112,
    ERROR_UNKNOWN_HIDDEN_FROM_USER: 113,
    ERROR_MISSING_POST_PARAMS: 114,
    ERROR_PERMISSION_DENIED: 115,
    ERROR_INPUT_ERROR: 116,
    ERROR_INVALID_TOKEN: 404,
    ERROR_EXPIRED_TOKEN: 405,

    MINIMUM_SEARCH_LENGTH: 5,
    MAX_PAGE_SIZE: 100,

    REGEX_EMAIL_VALIDATE: /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
    REGEX_URL: /(https?:\/\/(?:www\.|(?!www))[a-zA-Z0-9][a-zA-Z0-9-]+[a-zA-Z0-9]\.[^\s]{2,}|www\.[a-zA-Z0-9][a-zA-Z0-9-]+[a-zA-Z0-9]\.[^\s]{2,}|https?:\/\/(?:www\.|(?!www))[a-zA-Z0-9]+\.[^\s]{2,}|www\.[a-zA-Z0-9]+\.[^\s]{2,})/gi,
    DATABASE_DUPLICATE_ERROR: 1062,
    CAMPAIGNS_STATUSES:
    {
        UPCOMING: 1,
        ONGOING: 2,
        COMPLETED: 3,
        CANCELLED: 4
    },
    SKIP_STATUS_STATUS: -1,
    TEMPLATE_STATUS_DELETED: 0,
    TEMPLATE_STATUS_ACTIVE: 1,
    TEMPLATE_STATUS_INACTIVE: 2,

    CAMPAIGN_START_TIME_THRESHHOLD_IN_MILLIS: 1 * 60 * 1000,
    TEMPLATE_STATUS:
    {
        DELETED: 0,
        ACTIVE: 1,
        INACTIVE: 2
    },

    MAILING_AGENTS:
    {
        AWS_SES: "AWS",
        SEND_GRID: "SENDGRID"
    },

    USER_STATUS:
    {
        DELETED: 0,
        ACTIVE: 1
    },

    GROUP_STATUS:
    {
        DELETED: 0,
        ACTIVE: 1
    },

    SUBSCRIPTION_STATUS:
    {
        SUBSCRIBED: 1,
        UNSUBSCRIBED: 0
    },
    ACTION_TAKEN:
    {
        NEW_USER: 1,
        GROUPS_UPDATED: 2,
        USER_REENTRY: 3
    },

    SENDER_STATUS:
    {
        DELETED: 0,
        ACTIVE: 1
    },
    IGNORE_FILTER: -1,
    TEMPLATE_EXPITY_TIME_IN_MILLIS: 10 * 60 * 1000,
    GROUP_SORT:
    {
        LAST_MAIL_TIME: 1,
        ACTIVE_USER: 2
    },
    SESSION_TIME_IN_MILLIS: 5 * 60 * 1000,

    RECENT_CAMPAIGN_LIMIT_COUNT: 5,
    TOKEN_DELIMITER: '####@@@@####',//no special char so that no issue in regex,
    SES_VERIFICATION_STATUSES:
    {
        NotStarted: "NotStarted",
        Pending: "Pending",
        Success: "Success",
        Failed: "Failed",
        TemporaryFailure: "TemporaryFailure"
    }
});

export enum PHONE_STATUSES {
    VERIFIED = 1,
    NOT_VERIFIED = 0
}

export enum EMAIL_STATUSES {
    VERIFIED = 1,
    NOT_VERIFIED = 0
}

export enum ACCOUNT_SOURCE {
    LOCAL = 1,
    FACEBOOK = 2,
    GOOGLE = 3
}



export { CONSTANTS };



