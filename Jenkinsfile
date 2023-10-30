
pipeline {
    agent any
     tools {
        nodejs 'node' // Use the tool name you configured in Jenkins
    }
    stages {
        stage('Build') {
            steps {
                sh 'npm install'
            }
        }
        // stage('Test') {
        //     steps {
        //         sh 'npm install'
        //     }
        // }
    }
}
