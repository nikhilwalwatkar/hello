pipeline {
    agent any
    tools {
        nodejs 'node' // Use the tool name you configured in Jenkins
    }
    stages {
        stage('Install Dependency') {
            steps {
                script {
                        sh "npm install"
                }
            }
        }
        stage('Test react') {
            steps {
                script {
                        sh "npm run test"
                }
            }
        }

    }
}

