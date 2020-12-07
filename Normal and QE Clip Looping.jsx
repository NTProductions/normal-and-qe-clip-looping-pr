$.writeln("--------------------------");
// Normal track looping
var project = app.project;
var sequence = project.activeSequence;
$.writeln("Normal Track Loop Start");
for(var i = 0; i < sequence.videoTracks[1].clips.numItems; i++) {
    $.writeln("i = " + i);
    $.writeln(sequence.videoTracks[1].clips[i].name);
    }
$.writeln("Normal Track Loop End");

// QE track looping
app.enableQE();
$.writeln("QE Track Loop Start");
var thisTrack = qe.project.getActiveSequence().getVideoTrackAt(1);
for(var i = 0; i < thisTrack.numItems; i++) {
    $.writeln("i = " + i);
    $.writeln(thisTrack.getItemAt(i).name);
    }
$.writeln("QE Track Loop End");