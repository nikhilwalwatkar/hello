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
            steps {
                script {
                        bat 'npm.cmd test'
                }
            }
        }

    }
}

