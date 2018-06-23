ps -ef | grep node | grep product- | awk '{print $2}' | xargs kill -9
