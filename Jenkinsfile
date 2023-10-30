pipeline {
    agent any
    tools {
        nodejs 'node' // Use the tool name you configured in Jenkins
    }
    stages {
        stage('Install Dependency') {
            steps {
                script {
                        bat 'npm.cmd install'
                }
            }
        }
        stage('Testing') {
            steps {
                script {
                       bat 'npm.cmd run test -- --passWithNoTests'
                }
            }
        }

    }
}

