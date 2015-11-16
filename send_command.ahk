SendMode Input  ; Recommended for new scripts due to its superior speed and reliability.
SetWorkingDir %A_ScriptDir%  ; Ensures a consistent starting directory.

SetTitleMatchMode, 2

IfWinExist, %1%
    WinActivate ; use the window found above
/*
WinWaitActive, %1%
if ErrorLevel
{
    return
}
else
{
    */
    
IfWinActive, %1%
{
    commands = %2%
    command := 
    Loop, parse, commands, `,
    {
        command .= "{" A_LoopField "}"
    }
    Send %command%
}

;}