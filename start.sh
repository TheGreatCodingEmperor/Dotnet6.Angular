#!bin/bash
git clone https://gitlab.com/testworklab/Flow.Lab.git
dotnet sln add Flow.Lab/Flow.Lab.Lib/
cd Portal
dotnet add reference ../Flow.Lab/Flow.Lab.Lib