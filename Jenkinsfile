pipeline {
    agent {
        docker {
            image 'node:20.9.0-alpine3.18' 
            args '-p 3000:3000' 
        }
    }

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
                        echo "testing running"
                }
            }
        }
        stage('build') {
            steps {
                script {
                       bat 'npm.cmd run build'
                }
            }
        }
    }
}

