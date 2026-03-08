interface EnvironmentVars {
    NAME: string;
    OS: string;
    [propName: string]: string;
}

const env: EnvironmentVars = {
    NAME: "NAME",
    OS: "WINDOWS",
};

const nodeEnv: string = env.NODE_ENV;
