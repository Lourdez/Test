#!/bin/bash
for file in /home/vagrant/demo; do
    if grep -f "Congratulations" "$file"; then
        echo "$file"
    fi
done